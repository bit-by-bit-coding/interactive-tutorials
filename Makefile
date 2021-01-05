# Makefile

all: sass
	echo "DONE!"

ifndef DIR
sass:
	echo "Making SASS files..."
	find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && [ -e style.scss ] && sass style.scss style.css" \;
else
sass: $(DIR)
	echo "Making SASS files for $^..."
	cd $^ && sass style.scss style.css
endif

ifndef VERBOSE
.SILENT:
endif
