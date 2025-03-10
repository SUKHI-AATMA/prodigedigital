<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html>
<head>
  <script type="text/javascript" src="js/jquery-3.6.0.min.js"/>
  <script type="text/javascript" src="js/jquery.tablesorter.min.js"/>
  <script type="text/javascript" src="js/parser-date-iso8601.min.js"/>
  <script type="text/javascript" src="js/tablesorter.js"></script>
  <link rel="stylesheet" href="css/sitemap-style.css"/>
</head>
<body>
  <h1>Sitemap - Oasis India</h1>
  <div id="information">
      <p>Number of URLs in this sitemap:
        <xsl:value-of select="count(urlset/url)"/>
      </p>
  </div>
  <table class='sitemap'>
    <thead>
    <tr>
      <th>Sr. No.</th>
      <th>Location</th>
      <th>Last Modified</th>
      <th>Change Frequency</th>
      <th>Priority</th>
    </tr>
    </thead>
    <tbody>
      <xsl:for-each select="urlset/url">
      <tr>
        <td class="text-align-right"><xsl:number value="position()" format="1" /></td>
        <td><xsl:value-of select="loc"/></td>
        <td><xsl:value-of select="lastmod"/></td>
        <td><xsl:value-of select="changefreq"/></td>
        <td><xsl:value-of select="priority"/></td>
      </tr>
      </xsl:for-each>
    </tbody>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

