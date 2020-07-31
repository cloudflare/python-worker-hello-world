# Python hello world for Cloudflare Workers

Your Python code in [index.py](https://github.com/cloudflare/python-worker-hello-world/blob/master/index.py), running on Cloudflare Workers.

In addition to [Wrangler](https://github.com/cloudflare/wrangler) and [npm](https://www.npmjs.com/get-npm), you will need to install [Transcrypt](http://www.transcrypt.org/docs/html/installation_use.html), including Python 3.7 and virtualenv.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/python-worker-hello-world
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

#### Transcrypt

Before building your project, you'll need to do one-time setup of Transcrypt.  Assuming you have Python 3.7 and virtualenv installed per the linked instructions above,

```
cd projectname

virtualenv env

source env/bin/activate

pip install transcrypt
```

After that you can run Wrangler commands, such as `wrangler publish` to push your code to Cloudflare.  If you exit virtualenv (`deactivate`) and return to the project directory later, you'll need to activate virtualenv (`source env/bin/activate`) but will not need to rerun the other installation commands.

If `python3` is not Python 3.7 on your system, make sure you install it, create the virtualenv using the right version of Python, and edit webpack.config.js under `command` to specify the correct path to the Python 3.7 executable in the virtualenv directory. If you are using Windows, see [this workaround for an issue with transcrypt-loader paths](https://github.com/QQuick/Transcrypt/issues/624#issuecomment-507866238).

For more information on how Python translates to Javascript, see the [Transcrypt docs](http://www.transcrypt.org/documentation).
