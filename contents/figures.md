# {{ page.level }} List of Figures

<p class="big-reset">&nbsp;</p>

<!--
	TODO: truncate captions.
-->
{% for fig in book.figures %}
   [Fig {{ fig.nro }}](./{{ fig.backlink | replace('md', 'html') | replace('contents', '')}}) {{ fig.list_caption }}
{% endfor %}