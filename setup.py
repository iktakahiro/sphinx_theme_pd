from setuptools import setup

setup(
    name='sphinx_theme_pd',
    version='0.0.8',
    url='https://github.com/iktakahiro/sphinx_theme_pd',
    license='MIT',
    author='Takahiro Ikeuchi @iktakahiro',
    author_email='takahiro.ikeuchi@gmail.com',
    description='Material Design theme for Sphinx.',
    long_description=open('README.rst').read(),
    zip_safe=False,
    packages=['sphinx_theme_pd'],
    package_data={'sphinx_theme_pd': [
        'theme.conf',
        '*.html',
        'static/*.css',
        'static/*.js'
    ]},
    include_package_data=True,
    classifiers=[
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
