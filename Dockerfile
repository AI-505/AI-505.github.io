# Use a Debian-based Ruby image for broader compatibility
FROM ruby:3.3-slim


# Set environment variables for Bundler and Ruby
ENV GEM_HOME=/usr/local/bundle \
    PATH=$GEM_HOME/bin:$PATH \
    BUNDLE_PATH=vendor/bundle \
    BUNDLE_APP_CONFIG=vendor/bundle \
    BUNDLE_BIN=vendor/bundle/bin \
    BUNDLE_JOBS=4 \
    BUNDLE_SILENCE_ROOT_WARNING=1

# Install necessary dependencies for Ruby gems and Jekyll
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    git \
    libffi-dev \
    libgmp-dev \
    libxml2-dev \
    libxslt1-dev \
    nodejs \
    python3 \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Install Jekyll and Bundler
RUN gem install jekyll bundler
# RUN gem install bigdecimal -v 3.1.9
# RUN gem install logger -v 1.6.5

# Set the working directory
WORKDIR /srv/jekyll

# Expose Jekyll's default server port
EXPOSE 4000

# Command to serve the Jekyll site
# CMD ["jekyll", "serve", "--host", "0.0.0.0"]
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
# CMD ["bundle", "exec", "jekyll", "build"]