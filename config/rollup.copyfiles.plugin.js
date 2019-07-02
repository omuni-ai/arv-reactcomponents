import fs from "fs";
import path from "path";

const copyFiles = function(options) {
  fs.readdir(options.input, function(err, files) {
    files.forEach(function(file, index) {
      const resolvedFile = path.resolve(options.input, file);
      const targetFile = path.join(options.output, file);

      fs.stat(resolvedFile, function(err, stat) {
        // If directory, execute a recursive call
        if (stat && !stat.isDirectory()) {
          if(!options.matches || (options.matches && options.matches.test(file)))
          fs.writeFileSync(targetFile, fs.readFileSync(resolvedFile), { encoding: 'utf8', flag: 'w' });
        } else if (stat) {
          if (!fs.existsSync(targetFile)) {
            fs.mkdirSync(targetFile);
          }
          copyFiles({
            input: resolvedFile,
            output: targetFile,
            matches: options.matches
          });
        }
      });
    });
  });
};

const copyPlugin = function(options) {
  return {
    ongenerate() {
      const targDir = path.dirname(options.output);
      let folderPath = "";

      options.output.split("/").forEach(function(folder, index) {
        folderPath += folder + "/";
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        }
      });


      copyFiles(options);
    }
  };
};

export default copyPlugin;