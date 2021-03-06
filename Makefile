
REPORTER ?= list

install:
	@$(MAKE) install-all

install-all:
	@if [ ! -d "node_modules" ]; then npm install --unsafe-perm; fi

test:
	@$(MAKE) install-all
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		test/*.js

run-dev:
	@$(MAKE) install-all
	@node test/browser/server

build:
	@$(MAKE) install-all
	@node scripts/build

.PHONY: install-all test run-dev build
