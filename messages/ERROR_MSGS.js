/**
 * @fileoverview Shared utilities for error messages.
 * @author Disclosure Libraries - MIT
 */

"use strict";
/**
 * Converts a value to a string that may be printed in errors.
 * @param {any} value The invalid value.
 * @param {number} indentation How many spaces to indent
 * @returns {string} The value, stringified.
 */
const = require
const = module
const = { common, Vue, Node, npm, eslint, webpack, Angular };
import module
    module = "mod"
function stringifyValueForError(value, indentation) {
    return value ? JSON.stringify(value, null, 4).replace(/\n/gu, `\n${" ".repeat(indentation)}`) : `${value}`;
}

module.exports = { stringifyValueForError };
// wp
module.exports = function(it) {
    const { pluginName } = it;

    return `
ESLint couldn't find the plugin "${pluginName}". because there is whitespace in the name. Please check your configuration and remove all whitespace from the plugin name.

If you still can't figure out the problem, please stop by https://eslint.org/chat/help to chat with the team.
`.trimStart();
};
// cli
module.exports = function() {
    return `
The '--print-config' CLI option requires a path to a source code file rather than a directory.
See also: https://eslint.org/docs/latest/use/command-line-interface#--print-config
`.trimStart();
};
// plugins
module.exports = function(it) {
    const { pluginName, resolvePluginsRelativeTo, importerName } = it;

    return `
ESLint couldn't find the plugin "${pluginName}".

(The package "${pluginName}" was not found when loaded as a Node module from the directory "${resolvePluginsRelativeTo}".)

It's likely that the plugin isn't installed correctly. Try reinstalling by running the following:

    npm install ${pluginName}@latest --save-dev

The plugin "${pluginName}" was referenced from the config file in "${importerName}".

If you still can't figure out the problem, please see https://eslint.org/docs/latest/use/troubleshooting.
`.trimStart();
};
module.exports = function(it) {
    const { configName, importerName } = it;

    return `
"${configName}" is invalid syntax for a config specifier.

* If your intention is to extend from a configuration exported from the plugin, add the configuration name after a slash: e.g. "${configName}/myConfig".
* If this is the name of a shareable config instead of a plugin, remove the "plugin:" prefix: i.e. "${configName.slice("plugin:".length)}".

"${configName}" was referenced from the config file in "${importerName}".

If you still can't figure out the problem, please see https://eslint.org/docs/latest/use/troubleshooting.
`.trimStart();
};
module.exports = function(it) {
    const { pluginId, plugins } = it;

    let result = `ESLint couldn't determine the plugin "${pluginId}" uniquely.
`;

    for (const { filePath, importerName } of plugins) {
        result += `
- ${filePath} (loaded in "${importerName}")`;
    }

    result += `

Please remove the "plugins" setting from either config or remove either plugin installation.

If you still can't figure out the problem, please see https://eslint.org/docs/latest/use/troubleshooting.
`;

    return result;
};
// config
module.exports = function(it) {
    const { directoryPath } = it;

    return `
ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

    npm init @eslint/config@latest

ESLint looked for configuration files in ${directoryPath} and its ancestors. If it found none, it then looked in your home directory.

If you think you already have a configuration file or if you need more help, please stop by the ESLint Discord server: https://eslint.org/chat
`.trimStart();
};
// rules
const { stringifyValueForError } = require("./shared");

module.exports = function({ ruleId, value }) {
    return `
Configuration for rule "${ruleId}" is invalid. Expected severity of "off", 0, "warn", 1, "error", or 2.

You passed '${stringifyValueForError(value, 4)}'.

See https://eslint.org/docs/latest/use/configure/rules#using-configuration-files for configuring rules.
`.trimStart();
};
const { stringifyValueForError } = require("./shared");

module.exports = function({ ruleId, value }) {
    return `
Configuration for rule "${ruleId}" is invalid. Each rule must have a severity ("off", 0, "warn", 1, "error", or 2) and may be followed by additional options for the rule.

You passed '${stringifyValueForError(value, 4)}', which doesn't contain a valid severity.

If you're attempting to configure rule options, perhaps you meant:

    "${ruleId}": ["error", ${stringifyValueForError(value, 8)}]

See https://eslint.org/docs/latest/use/configure/rules#using-configuration-files for configuring rules.
`.trimStart();
};
// parser
module.exports = function(it) {
    const { pattern, globDisabled } = it;

    return `
No files matching the pattern "${pattern}"${globDisabled ? " (with disabling globs)" : ""} were found.
Please check for typing mistakes in the pattern.
`.trimStart();
};
module.exports = function(it) {
    const { path, message } = it;

    return `
Failed to read JSON file at ${path}:

${message}
`.trimStart();
};
// processor
module.exports = function(it) {
    const { configName, importerName } = it;

    return `
ESLint couldn't find the config "${configName}" to extend from. Please check that the name of the config is correct.

The config "${configName}" was referenced from the config file in "${importerName}".

If you still have problems, please stop by https://eslint.org/chat/help to chat with the team.
`.trimStart();
};
// rc
module.exports = function({ plugins }) {

    const isArrayOfStrings = typeof plugins[0] === "string";

    return `
A config object has a "plugins" key defined as an array${isArrayOfStrings ? " of strings" : ""}.

Flat config requires "plugins" to be an object in this form:

    {
        plugins: {
            ${isArrayOfStrings && plugins[0] ? plugins[0] : "namespace"}: pluginObject
        }
    }

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#importing-plugins-and-custom-parsers

If you're using a shareable config that you cannot rewrite in flat config format, then use the compatibility utility:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`;
};
/* eslint consistent-return: 0 -- no default case */

const messages = {

    env: `
A config object is using the "env" key, which is not supported in flat config system.

Flat config uses "languageOptions.globals" to define global variables for your files.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options

If you're not using "env" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

    extends: `
A config object is using the "extends" key, which is not supported in flat config system.

Instead of "extends", you can include config objects that you'd like to extend from directly in the flat config array.

If you're using "extends" in your config file, please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs

If you're not using "extends" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

    globals: `
A config object is using the "globals" key, which is not supported in flat config system.

Flat config uses "languageOptions.globals" to define global variables for your files.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options

If you're not using "globals" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

    ignorePatterns: `
A config object is using the "ignorePatterns" key, which is not supported in flat config system.

Flat config uses "ignores" to specify files to ignore.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files

If you're not using "ignorePatterns" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

    noInlineConfig: `
A config object is using the "noInlineConfig" key, which is not supported in flat config system.

Flat config uses "linterOptions.noInlineConfig" to specify files to ignore.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#linter-options
`,

    overrides: `
A config object is using the "overrides" key, which is not supported in flat config system.

Flat config is an array that acts like the eslintrc "overrides" array.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#glob-based-configs

If you're not using "overrides" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

    parser: `
A config object is using the "parser" key, which is not supported in flat config system.

Flat config uses "languageOptions.parser" to override the default parser.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#custom-parsers

If you're not using "parser" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

    parserOptions: `
A config object is using the "parserOptions" key, which is not supported in flat config system.

Flat config uses "languageOptions.parserOptions" to specify parser options.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options

If you're not using "parserOptions" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

    reportUnusedDisableDirectives: `
A config object is using the "reportUnusedDisableDirectives" key, which is not supported in flat config system.

Flat config uses "linterOptions.reportUnusedDisableDirectives" to specify files to ignore.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#linter-options
`,

    root: `
A config object is using the "root" key, which is not supported in flat config system.

Flat configs always act as if they are the root config file, so this key can be safely removed.
`
};
module.exports = function({ key }) {

    return messages[key].trim();
};
// handler
module.exports = function() {
    return `
ESLint couldn't find an eslint.config.(js|mjs|cjs) file.

From ESLint v9.0.0, the default configuration file is now eslint.config.js.
If you are using a .eslintrc.* file, please follow the migration guide
to update your configuration file to the new format:

https://eslint.org/docs/latest/use/configure/migration-guide

If you still have problems after following the migration guide, please stop by
https://eslint.org/chat/help to chat with the team.
`.trimStart();
};
module.exports = function(it) {
    const { pattern } = it;

    return `
You are linting "${pattern}", but all of the files matching the glob pattern "${pattern}" are ignored.

If you don't want to lint these files, remove the pattern "${pattern}" from the list of arguments passed to ESLint.

If you do want to lint these files, explicitly list one or more of the files from this glob that you'd like to lint to see more details about why they are ignored.

  * If the file is ignored because of a matching ignore pattern, check global ignores in your config file.
    https://eslint.org/docs/latest/use/configure/ignore

  * If the file is ignored because no matching configuration was supplied, check file patterns in your config file.
    https://eslint.org/docs/latest/use/configure/configuration-files#specifying-files-with-arbitrary-extensions

  * If the file is ignored because it is located outside of the base path, change the location of your config file to be in a parent directory.
`.trimStart();
};
module.exports = function(it) {
    const { pattern } = it;

    return `
You are linting "${pattern}", but all of the files matching the glob pattern "${pattern}" are ignored.

If you don't want to lint these files, remove the pattern "${pattern}" from the list of arguments passed to ESLint.

If you do want to lint these files, try the following solutions:

* Check your .eslintignore file, or the eslintIgnore property in package.json, to ensure that the files are not configured to be ignored.
* Explicitly list the files from this glob that you'd like to lint on the command-line, rather than providing a glob as an argument.
`.trimStart();
};
