all: build

service = web

.PHONY: build
build: ## 👷 Build app
	@echo "👷 Building app"
	@docker-compose build --no-cache $(service)

up: ## 🛫 Run app
	@echo "🛫 Serving app"
	docker-compose up $(service)

down: ## 🔌 Shut down app deleting containers
	@echo "🔌 Disconnecting"
	@docker-compose down

kill: ## 🗡️ Kill containers
	@echo "🗡️ Killing"
	@docker-compose kill $(service)

restart: ## ️️↩️ Restart a containers
	@echo "↩️ Restarting"
	@docker-compose restart $(service)

clean: ## 🧹 Delete containers and their volumes
	@echo "🧹 Cleaning"
	@docker-compose down -v --remove-orphans

connect: ## 🔞 Connect to a container
	@echo "🔞 Connecting to container"
	@docker-compose run $(service) /bin/bash

logs: ## 📋 show container logs
	@echo "📋 Showing logs"
	@docker-compose logs -f --tail 100 $(service)

lint: ## 🔦 Lint code
	@echo "🔦 Linting code"
	@docker-compose run --rm --entrypoint sh $(service) -c "npm run lint"

bundle: ## 📦 Bundle code
	@echo "📦 Bundle code"
	@docker-compose run --rm --entrypoint sh $(service) -c "npm run build"

help: ## 📖 Show make targets
	@echo "📖 Help"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf " \033[36m%-20s\033[0m  %s\n", $$1, $$2}' $(MAKEFILE_LIST)
