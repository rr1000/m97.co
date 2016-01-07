# Ryan S. Rich - Personal Website

Formerly m97.co (which is now the Medium publication _Circumstellar Disk_), ryansrich.com is where I document my work.

m97 is primarily built using [Middleman](//middlemanapp.com), a static site generator. It's hosted on Digital Ocean and deployed via Codeship. Below is a quick getting started guide.

### A quick note about reuse

With regards to code I'm employing the following license:

> Do What the Fuck You Want to Public License

However all work, product screenshots, sketches, etc. are expressly prohibited from reuse and/or distribution. If you have any questions please direct them to [r@m97.co](mailto:r@m97.co).

### Getting started
After cloning and navigating to this repo:

- Follow the [Middleman getting started guide](//middlemanapp.com/basics/install/)
- `$ bundle install`

That's it!

### Commands

- `rake run` will start the local web server (running on port `2233`)
- `rake sass` will compile and minify all sass in the `assets/css` directory
- `rake build` will build the site