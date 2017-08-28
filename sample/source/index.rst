What is this?
=============

This web page is a sample result of building HTML using Sphinx with sphinx_theme_pd.

* `sphinx_theme_pd : https://github.com/iktakahiro/sphinx_theme_pd <https://github.com/iktakahiro/sphinx_theme_pd>`_
* `Sphinx : http://www.sphinx-doc.org/en/stable/ <http://www.sphinx-doc.org/en/stable/>`_

.. toctree::
   :maxdepth: 2
   :caption: Contents:

Installation
------------

.. code-block:: bash

   $ pip install sphinx sphinx_theme_pd
   $ sphinx-quickstart

Edit your ``conf.py``.

.. code-block:: python

   import sphinx_theme_pd
   html_theme = 'sphinx_theme_pd'
   html_theme_path = [sphinx_theme_pd.get_html_theme_path()]

Build a static site

.. code-block:: bash

   $ make html

Examples
========

Headings
--------

Heading 2
---------

Heading 3
^^^^^^^^^

Heading 4
+++++++++

Inline Markups
--------------

*emphasis*

**strong emphasis**

``code samples``

Table
-----

+------------+------------+-----------+
| Header 1   | Header 2   | Header 3  |
+============+============+===========+
| body row 1 | column 2   | column 3  |
+------------+------------+-----------+
| body row 2 | Cells may span columns.|
+------------+------------+-----------+
| body row 3 | Cells may  | - Cells   |
+------------+ span rows. | - contain |
| body row 4 |            | - blocks. |
+------------+------------+-----------+

List
----

#. One
#. Two
#. Three

Source Code
-----------

.. py:function:: my_function(param1, param2)

   The description of my_function.

   :param str param1: The description of param1
   :param int param2: The description of param2

.. py:class:: MyClass

   The description of MyClass.

   .. py:method:: my_class_method(param1, param2)

      The description of my_class_method.

      :param str param1: The description of param1
      :param int param2: The description of param2

   .. py:staticmethod:: my_static_method(param1, param2)

      The description of my_static_method.

      :param str param1: The description of param1
      :param int param2: The description of param2

Admonition
----------

.. attention:: This is an attention admonition.
   This is the second line of the first paragraph.

.. caution:: This is a caution admonition.
   This is the second line of the first paragraph.

.. warning:: This is a warning admonition.
   This is the second line of the first paragraph.

.. danger:: This is a danger admonition.
   This is the second line of the first paragraph.

.. error:: This is an error admonition.
   This is the second line of the first paragraph.

.. hint:: This is an hint admonition.
   This is the second line of the first paragraph.

.. tip:: This is a tip admonition.
   This is the second line of the first paragraph

.. important:: This is an important admonition.
   This is the second line of the first paragraph.

.. note:: This is a note admonition.
   This is the second line of the first paragraph.

.. admonition:: This is a general admonition.
   This is the second line of the first paragraph.


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
