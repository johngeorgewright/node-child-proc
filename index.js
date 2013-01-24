var base = require('child_process'),
    os   = require('os'),
    util = require('util');

// Add all the methods and properties, found
// in the child_process module, to this module's
// exports.
util._extend(exports, base);

// Windows behaviours
if(os.platform() === 'win32'){
  
  /**
   * Changes the commands, arguments and options
   * of a child process suitable for windows.
   *
   * @param cmd {String} The command name
   * @param args {Array} List of string arguments
   * @param opts {Object} Options
   * @return {Object} Keys: name, args, opts
   */
  function winCmd(cmd, args, opts){
    args = args || [];
    opts = opts || {};
    args = ['/C', cmd, args.join(' ')];
    opts.windowsVerbatimArguments = true;
    return {
      name : 'cmd',
      args : args,
      opts : opts
    };
  }

  /**
   * Overriding the child_process.spawn method
   * to use correct windows syntax.
   *
   * @see child_process.spawn
   */
  exports.spawn = function(cmd, args, opts){
    cmd = winCmd(cmd, args, opts);
    return base.spawn(cmd.name, cmd.args, cmd.opts);
  };
}

