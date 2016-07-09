fur
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![Dependency Status][bd_gemnasium_shield_url]][bd_gemnasium_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/fur-labo/fur
[bd_travis_url]: http://travis-ci.org/fur-labo/fur
[bd_travis_shield_url]: http://img.shields.io/travis/fur-labo/fur.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/fur-labo/fur
[bd_travis_com_shield_url]: https://api.travis-ci.com/fur-labo/fur.svg?token=
[bd_license_url]: https://github.com/fur-labo/fur/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/fur-labo/fur
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/fur-labo/fur.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/fur-labo/fur.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/fur-labo/fur
[bd_gemnasium_shield_url]: https://gemnasium.com/fur-labo/fur.svg
[bd_npm_url]: http://www.npmjs.org/package/fur
[bd_npm_shield_url]: http://img.shields.io/npm/v/fur.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Quick generator for banner, favicon, etc...

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>

<a href="https://github.com/fur-labo/fur#readme"><img style="height:128px;" src="doc/fur-banner.png" height="128"/></a>

```javascript
// Generate favicon with command options.
$ fur favicon "my-favicon.png" --color b --font n --text oh --shape c
```



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/gudies/02-howto.md.hbs" Start -->

<a name="section-doc-gudies-02-howto-md"></a>
Getting started
------

### Requirements

+ [node.js&gt;&#x3D;6][nodejs_url]
+ [phantomjs>=2.0.0](http://phantomjs.org/)

### Installation

fur is available as an [npm][npm_url] package.

```bash
# Install fur as a global module.
$ npm install fur -g
```

Or you can install it without `-g` option and use [Programmatic API](#programmatic-api).

<a name="available commands"/>
### Available Commands

```bash
$ fur -h

  Usage: fur [options] [command]


  Commands:

    banner [options] <filename>   Generate a banner.
    favicon [options] <filename>  Generate a favicon.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number


```

<a name="programmatic-api"/>
### Programmatic API

fur provides programmatic API which enables you to execute fur commands from Node.js program.

```javascript
var fur = require('fur');
fur.banner('my-banner.svg', {
text: "coz",
color: "o",
font: "aa",
style: "plain",
shape: "k"
}, function (err) {
});
```


[nodejs_url]: https://nodejs.org/
[npm_url]: https://www.npmjs.com


<!-- Section from "doc/gudies/02-howto.md.hbs" End -->

<!-- Section from "doc/gudies/03-banners.md.hbs" Start -->

<a name="section-doc-gudies-03-banners-md"></a>
Generating Logo Banner
------------------

### Banner Examples

| Image | Command |
| ----- | ------- |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/01-fur/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "fur-banner.png" --text="FUR" --color="#ff9100" --font="bt" --shape="a"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/02-coz/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "coz-banner.png" --text="coz" --color="#00b560" --font="aa" --shape="b"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/03-apeman/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "apeman-banner.png" --text="apeman" --color="n" --font="p" --shape="a"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/04-pudding/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "pudding-banner.png" --text="PUDDING" --color="bi" --font="cn" --shape="e"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/05-pon/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "pon-banner.png" --text="pon" --color="ah" --font="ar" --shape="f"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/06-the/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "the-banner.png" --text="the" --color="ac" --font="e" --shape="f"  ` |

These examples are available [here](https://github.com/fur-labo/fur-examples).

### Banner Usage

```bash
$ fur banner -h


  Usage: banner [options] <filename>

  Generate a banner.

  Options:

    -h, --help                  output usage information
    -c, --color <color>         Color expression string or color theme name.
    -s, --shape <shape>         Banner style.
    -f, --font <font>           Font file name or font theme name.
    -F, --font-size <fontSize>  Size of font.
    -H, --height <height>       Banner height.
    -o, --format <format>       File format. 'svg' or 'png'.
    -t, --text <text>           Banner text.
    -W, --width <width>         Banner width.
    -v, --verbose               Emit verbose log.


```



<!-- Section from "doc/gudies/03-banners.md.hbs" End -->

<!-- Section from "doc/gudies/04-favicons.md.hbs" Start -->

<a name="section-doc-gudies-04-favicons-md"></a>
Generating Favicon
------------------

### Favicon Examples

| Image | Command |
| ----- | ------- |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/01-fur/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "f-favicon.png" --text="F" --color="#ff9100" --font="bt" --shape="a"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/02-coz/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "c-favicon.png" --text="c" --color="#00b560" --font="aa" --shape="c"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/03-apeman/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "ap-favicon.png" --text="ap" --color="n" --font="p" --shape="g"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/04-pudding/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "p-favicon.png" --text="P" --color="bi" --font="cn" --shape="a"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/05-pon/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "pon-favicon.png" --text="pon" --color="ah" --font="ar" --shape="g"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/06-the/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "the-favicon.png" --text="the" --color="ac" --font="e" --shape="c" --font-size="124"  ` |
| <img src="https://github.com/fur-labo/fur-examples/raw/master/example/08-apeman-app-contrib/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "app-favicon.png" --text="app" --color="n" --font="p" --shape="i" --font-size="92"  ` |

These examples are available [here](https://github.com/fur-labo/fur-examples).


### Favicon Usage

```bash
$ fur favicon -h


  Usage: favicon [options] <filename>

  Generate a favicon.

  Options:

    -h, --help                  output usage information
    -c, --color <color>         Color expression string or color theme name.
    -f, --font <font>           Font file name or font theme name.
    -F, --font-size <fontSize>  Size of font.
    -S, --size <size>           Favicon size.
    -s, --shape <shape>         Banner style.
    -t, --text <text>           Favicon text.
    -o, --format <format>       File format. 'svg' or 'png'.
    -v, --verbose               Emit verbose log.


```


<!-- Section from "doc/gudies/04-favicons.md.hbs" End -->

<!-- Section from "doc/gudies/05-Themes.md.hbs" Start -->

<a name="section-doc-gudies-05-themes-md"></a>
Theme Gallery
------------

+ [Color Themes](http://fur-labo.github.io/fur-colors)
+ [Font Themes](http://fur-labo.github.io/fur-fonts)
+ [Shape Themes](http://fur-labo.github.io/fur-shapes)



<!-- Section from "doc/gudies/05-Themes.md.hbs" End -->

<!-- Section from "doc/gudies/11-project.md.hbs" Start -->

<a name="section-doc-gudies-11-project-md"></a>
About this project
--------

<a name="11-project-author"></a>
### Author

+ [Taka Okunishi](http://okunishitaka.com)

<a name="11-project-donation"></a>
### Donation

Support this project and [others by okunishinishi][my_gratipay_url] via [gratipay][my_gratipay_url].

[<img src="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg" alt="Support via Gratipay"/>][my_gratipay_url]



[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat


<!-- Section from "doc/gudies/11-project.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/fur-labo/fur/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [fur-examples][fur_examples_url]
+ [fur-colors][fur_colors_url]
+ [fur-fonts][fur_fonts_url]
+ [fur-shapes][fur_shapes_url]

[fur_examples_url]: https://github.com/fur-labo/fur-examples
[fur_colors_url]: https://github.com/fur-labo/fur-colors
[fur_fonts_url]: https://github.com/fur-labo/fur-fonts
[fur_shapes_url]: https://github.com/fur-labo/fur-shapes

<!-- Links End -->
