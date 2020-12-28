# Makefile

.SILENT: sass all

all: sass
	echo "DONE!"

sass:
	echo "Making SASS Files..."
	find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && [ -e style.scss ] && sass style.scss style.css" \;
