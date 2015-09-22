============================================================
sphinx_theme_pd
============================================================

Material Design theme for `Sphinx <http://sphinx-doc.org>`_

Installation
============================================================

Frist, pip install.

.. code-block:: bash

   pip install sphinx_theme_pd

Second, edit your conf.py file.

.. code-block:: none

   import sphinx_rtd_theme
   html_theme = "sphinx_theme_pd"
   html_theme_path = [sphinx_theme_pd.get_html_theme_path()]
