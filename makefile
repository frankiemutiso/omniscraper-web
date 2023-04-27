requirements.txt: Pipfile
	pipenv run python3 -c "import toml; out = open('requirements.txt', 'w'); out.write('# Auto-generated!\n\n ' + '\n'.join([package + ('' if ( isinstance(version, str) and version == '*') else (version['version'] if not isinstance(version, str) else version)) for package, version in toml.load('Pipfile')['packages'].items()]))"
