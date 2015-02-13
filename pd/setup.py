from setuptools import setup

setup(
    name = 'pd',
    version = '0.0.1',
    author = 'Takahiro Ikeuchi @iktakahiro',
    author_email = 'takahiro.ikeuchi@gmail.com',
    py_modules = ['pd'],
    entry_points = {
        'sphinx_themes': [
            'path = pd:get_path',
        ],
    },
)
