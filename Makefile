.PHONY: production
production:
	JEKYLL_ENV=production jekyll build -d _production
	find _production -name '*.html' -exec \
		tidy -config tidy-config.txt -q -m {} \;
	cssshrink _production/css/donier.css > _production/css/donier.min.css
	mv _production/css/donier.min.css _production/css/donier.css

.PHONY: deploy
deploy:
	cd _production && git add --all && git commit -m "Commit" && git push origin master
