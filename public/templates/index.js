(function(){dust.register("index",body_0);function body_0(chk,ctx){return chk.write("<html><head><title>Node streaming example</title>").notexists(ctx.get("noScript"),ctx,{"block":body_1},null).write("</head><body><table id=\"collections\"><tr><th>Delay</th><th>Allows rendering on</th><th>Actually rendered</th></tr>").section(ctx.get("collection"),ctx,{"block":body_2},null).write("</table></body></html>");}function body_1(chk,ctx){return chk.write("<script type=\"text/javascript\" src=\"public/javascripts/jquery.js\"></script><script type=\"text/javascript\" src=\"public/javascripts/jquery.cookie.js\"></script>\t\t<script type=\"text/javascript\" src=\"public/javascripts/underscore.js\"></script><script type=\"text/javascript\" src=\"public/javascripts/json2.js\"></script><script type=\"text/javascript\" src=\"public/javascripts/backbone.js\"></script><script type=\"text/javascript\" src=\"public/javascripts/dust-core.js\"></script>\t\t<script type=\"text/javascript\" src=\"http://localhost:8124/nowjs/now.js\"></script>\t\t<script type=\"text/javascript\" src=\"public/templates/delayedModel.js\"></script>\t\t<script type=\"text/javascript\" src=\"public/javascripts/clientRender.js\"></script>\t\t<noscript><meta http-equiv=\"refresh\" content=\"0;url=/?noScript=true\"/></noscript>\t\t\t");}function body_2(chk,ctx){return chk.section(ctx.get("renderIfReady"),ctx,{},null);}return body_0;})();