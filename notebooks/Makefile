remote=../assets/
#${HOME}/public_html/DM871/Resources/Ipython

%.html: %.ipynb
	jupyter nbconvert --template full $<
	mv $@ ${remote}

#%.html: %.ipynb
#	jupyter nbconvert --template basic $<
#	cp $@ ${remote}

%.exe: %.ipynb
	jupyter nbconvert --to notebook --execute $<.ipynb