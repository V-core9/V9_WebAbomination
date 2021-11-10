v9
==

CLI Helper Tool when running v-core9 website

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/v9.svg)](https://npmjs.org/package/v9)
[![Downloads/week](https://img.shields.io/npm/dw/v9.svg)](https://npmjs.org/package/v9)
[![License](https://img.shields.io/npm/l/v9.svg)](https://github.com/V-core9/V-core9.com/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g v9
$ v9 COMMAND
running command...
$ v9 (-v|--version|version)
v9/1.0.1 win32-x64 node-v16.13.0
$ v9 --help [COMMAND]
USAGE
  $ v9 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`v9 config ACTION`](#v9-config-action)
* [`v9 hello`](#v9-hello)
* [`v9 help [COMMAND]`](#v9-help-command)
* [`v9 notes ACTION`](#v9-notes-action)
* [`v9 tasks ACTION`](#v9-tasks-action)
* [`v9 welcome`](#v9-welcome)

## `v9 config ACTION`

Handles Vdo App configurations

```
USAGE
  $ v9 config ACTION

ARGUMENTS
  ACTION  (view|create|registerOption) action/function/method you want it to execute

OPTIONS
  -a, --all=all      all
  -n, --name=name    name
  -v, --value=value  value

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/config.js](https://github.com/V-core9/V-core9.com/blob/v1.0.1/src/commands/config.js)_

## `v9 hello`

Describe the command here

```
USAGE
  $ v9 hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/V-core9/V-core9.com/blob/v1.0.1/src/commands/hello.js)_

## `v9 help [COMMAND]`

display help for v9

```
USAGE
  $ v9 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.4/src/commands/help.ts)_

## `v9 notes ACTION`

Describe the command here

```
USAGE
  $ v9 notes ACTION

ARGUMENTS
  ACTION  (view|new|trash|untrash|edit|update|complete|incomplete|total_number|generate_test|purge_system) [default:
          view] action/function/method you want it to execute

OPTIONS
  -a, --all=all                            all
  -c, --content=content                    content to use
  -d, --description=description            description to use
  -h, --shortDescription=shortDescription  shortDescription to use
  -i, --id=id                              id to use
  -s, --status=status                      status to use
  -t, --title=title                        title to use

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/notes.js](https://github.com/V-core9/V-core9.com/blob/v1.0.1/src/commands/notes.js)_

## `v9 tasks ACTION`

Describe the command here

```
USAGE
  $ v9 tasks ACTION

ARGUMENTS
  ACTION  (view|new|trash|untrash|edit|update|complete|incomplete|total_number|generate_test|purge_system) [default:
          view] action/function/method you want it to execute

OPTIONS
  -a, --all=all                            all
  -c, --content=content                    content to use
  -d, --description=description            description to use
  -g, --generate_number=generate_number    Number to generate as test
  -h, --shortDescription=shortDescription  shortDescription to use
  -i, --id=id                              id to use
  -r, --ref_url=ref_url                    Reference URL to use
  -s, --status=status                      status to use
  -t, --title=title                        title to use
  -y, --yes=yes                            Auto Confirm YES

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/tasks.js](https://github.com/V-core9/V-core9.com/blob/v1.0.1/src/commands/tasks.js)_

## `v9 welcome`

Describe the command here

```
USAGE
  $ v9 welcome

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/welcome.js](https://github.com/V-core9/V-core9.com/blob/v1.0.1/src/commands/welcome.js)_
<!-- commandsstop -->
