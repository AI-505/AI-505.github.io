JEKYLL_VERSION=latest
TAG=ai505
pwd=.

dockbuild:
	docker build -t jekyll-builder .

dockrun:
	docker run -it --rm -p 4000:4000 -v $(pwd):/srv/jekyll jekyll-builder

dockinstall:
	docker run -it --rm -p 4000:4000 -v $(pwd):/srv/jekyll jekyll-builder bundle install


dockupdate:
	docker run --rm \
		--volume="${PWD}:/srv/jekyll" \
		--volume="${PWD}/vendor/bundle:/usr/local/bundle" \
		-it jekyll/jekyll:${JEKYLL_VERSION} \
		bundle update

dockbuildnew:
	docker run --rm \
		--volume="${PWD}:/srv/jekyll" \
		--volume="${PWD}/vendor/bundle:/usr/local/bundle" \
		-it jekyll/jekyll:${JEKYLL_VERSION} \
		jekyll build --trace

dockbuildnewl:
	docker run --rm \
		--volume="${PWD}:/srv/jekyll" \
		-it jekyll/jekyll:latest \
		jekyll build --trace

dockserve:
	docker run --rm \
		--volume="${PWD}:/srv/jekyll" \
		--volume="${PWD}/vendor/bundle:/usr/local/bundle" \
		-p 4000:4000 \
		-it jekyll/jekyll:${JEKYLL_VERSION} \
		jekyll serve --watch #--drafts


install:
	#gem update --system # upgrade RubyGems
	gem install jekyll bundler # needed only once at system level
	bundle install # all gems in Gemfile

update:
	bundle update jekyll
	bundle update
	#sudo certified-update

build:
	bundle exec jekyll build

publish:
	bundle exec jekyll build --trace -d /home/marco/public_html/Teaching/AY2024-2025/AI505
	#cp -fr _site/* /home/marco/public_html/Teaching/AY2024-2025/DM587/ 

serve: build
	bundle exec jekyll serve --watch

clean:
	rm -fr /home/marco/public_html/Teaching/AY2024-2025/AI505

show:
	bundle show minima


