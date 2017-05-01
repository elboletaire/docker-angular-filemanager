Dockerfile for Angular Filemanager
==================================

A dockerized web file manager created using
[angular-filemanager][angular-filemanager].

Usage
-----

You can create a container both using `docker run` or `docker-compose`.

Using `docker run`:

~~~bash
docker run -d -p 8080:80 \
    -e BRIDGE=php-local \
    -v $PWD:/var/www/files \
    elboletaire/angular-filemanager
~~~

Using `docker-compose` (take a look to the one provided in this repo):

~~~bash
docker-compose up -d
~~~

### About bridges

For now there's only the `php-local` bridge implemented (see
[`configuration-php-local.js`][php-local config] for details).

If you want to implement your own bridge implementation just copy the existing
file and rename it following the schema `configuration-${BRIDGE}`.

After you've created your own bridge implementation, and have rebuilt the docker
image, just define it with the environment var `BRIDGE`:

~~~bash
docker run -d -p 8080:80 \
    -e BRIDGE=my-bridge-implementation \
    -v $PWD:/var/www/files \
    elboletaire/angular-filemanager
~~~

This would require a configuration file named
`configuration-my-bridge-implementation.js`.

Credits & License
-----------------

All the credits for the manager go for the [angular-filemanager][angular-filemanager]
developers; I've just created a dockerfile for my own needs.

This Dockerfile is licensed [under the GNU-GPL 3.0 license][LICENSE], whilst
the code for the angular-filemanager
[has its own MIT license][angular-filemanager license].

[angular-filemanager]: https://github.com/joni2back/angular-filemanager
[angular-filemanager license]: https://github.com/joni2back/angular-filemanager/blob/master/LICENSE

[php-local config]: ./templates/configuration-php-local.js
[LICENSE]: ./LICENSE