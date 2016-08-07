(function(){
Template.__checkName("dashboard5");
Template["dashboard5"] = new Template("Template.dashboard5", (function() {
  var view = this;
  return HTML.DIV({
    "class": "wrapper wrapper-content animated fadeIn"
  }, "\n\n        ", HTML.DIV({
    "class": "p-w-md m-t-sm"
  }, "\n            ", HTML.DIV({
    "class": "row"
  }, "\n\n                ", HTML.Raw('<div class="col-sm-4">\n                    <h1 class="m-b-xs">\n                        26,900\n                    </h1>\n                    <small>\n                        Sales in current month\n                    </small>\n                    <div id="sparkline1" class="m-b-sm"></div>\n                    <div class="row">\n                        <div class="col-xs-4">\n                            <small class="stats-label">Pages / Visit</small>\n                            <h4>236 321.80</h4>\n                        </div>\n\n                        <div class="col-xs-4">\n                            <small class="stats-label">% New Visits</small>\n                            <h4>46.11%</h4>\n                        </div>\n                        <div class="col-xs-4">\n                            <small class="stats-label">Last week</small>\n                            <h4>432.021</h4>\n                        </div>\n                    </div>\n\n                </div>'), "\n                ", HTML.Raw('<div class="col-sm-4">\n                    <h1 class="m-b-xs">\n                        98,100\n                    </h1>\n                    <small>\n                        Sales in last 24h\n                    </small>\n                    <div id="sparkline2" class="m-b-sm"></div>\n                    <div class="row">\n                        <div class="col-xs-4">\n                            <small class="stats-label">Pages / Visit</small>\n                            <h4>166 781.80</h4>\n                        </div>\n\n                        <div class="col-xs-4">\n                            <small class="stats-label">% New Visits</small>\n                            <h4>22.45%</h4>\n                        </div>\n                        <div class="col-xs-4">\n                            <small class="stats-label">Last week</small>\n                            <h4>862.044</h4>\n                        </div>\n                    </div>\n\n\n                </div>'), "\n                ", HTML.DIV({
    "class": "col-sm-4"
  }, "\n\n                    ", HTML.Raw('<div class="row m-t-xs">\n                        <div class="col-xs-6">\n                            <h5 class="m-b-xs">Income last month</h5>\n                            <h1 class="no-margins">160,000</h1>\n                            <div class="font-bold text-navy">98% <i class="fa fa-bolt"></i></div>\n                        </div>\n                        <div class="col-xs-6">\n                            <h5 class="m-b-xs">Sals current year</h5>\n                            <h1 class="no-margins">42,120</h1>\n                            <div class="font-bold text-navy">98% <i class="fa fa-bolt"></i></div>\n                        </div>\n                    </div>'), "\n\n\n                    ", HTML.TABLE({
    "class": "table small m-t-sm"
  }, "\n                        ", HTML.TBODY("\n                        ", HTML.TR("\n                            ", HTML.TD("\n                                ", HTML.STRONG("142"), " Projects\n\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.STRONG("22"), " Messages\n                            "), "\n\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("\n                                ", HTML.STRONG("61"), " Comments\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.STRONG("54"), " Articles\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("\n                                ", HTML.STRONG("154"), " Companies\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.STRONG("32"), " Clients\n                            "), "\n                        "), "\n                        "), "\n                    "), "\n\n\n\n                "), "\n\n            "), "\n\n            ", HTML.Raw('<div class="row">\n                <div class="col-lg-12">\n                    <div class="small pull-left col-md-3 m-l-lg m-t-md">\n                        <strong>Sales char</strong> have evolved over the years sometimes.\n                    </div>\n                    <div class="small pull-right col-md-3 m-t-md text-right">\n                        <strong>There are many</strong> variations of passages of Lorem Ipsum available, but the majority have suffered.\n                    </div>\n                    <div class="flot-chart m-b-xl">\n                        <div class="flot-chart-content" id="flot-dashboard5-chart"></div>\n                    </div>\n                </div>\n            </div>'), "\n\n\n            ", HTML.DIV({
    "class": "row"
  }, "\n                ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                    ", HTML.DIV({
    "class": "ibox"
  }, "\n\n\n\n                        ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                            ", HTML.Raw('<div class="row">\n                                <div class="col-sm-4">\n                                    <div class="form-group">\n                                        <label class="control-label" for="product_name">Project Name</label>\n                                        <input type="text" id="product_name" name="product_name" value="" placeholder="Project Name" class="form-control">\n                                    </div>\n                                </div>\n                                <div class="col-sm-2">\n                                    <div class="form-group">\n                                        <label class="control-label" for="price">Name</label>\n                                        <input type="text" id="price" name="price" value="" placeholder="Name" class="form-control">\n                                    </div>\n                                </div>\n                                <div class="col-sm-2">\n                                    <div class="form-group">\n                                        <label class="control-label" for="quantity">Company</label>\n                                        <input type="text" id="quantity" name="quantity" value="" placeholder="Company" class="form-control">\n                                    </div>\n                                </div>\n                                <div class="col-sm-4">\n                                    <div class="form-group">\n                                        <label class="control-label" for="status">Status</label>\n                                        <select name="status" id="status" class="form-control">\n                                            <option value="1" selected="">Completed</option>\n                                            <option value="0">Pending</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>'), "\n\n                            ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                                ", HTML.TABLE({
    "class": "table table-striped"
  }, "\n\n                                    ", HTML.TBODY("\n                                    ", HTML.TR("\n                                        ", HTML.TD("1"), "\n                                        ", HTML.TD("Master project"), "\n                                        ", HTML.TD("Patrick Smith"), "\n                                        ", HTML.TD("$892,074"), "\n                                        ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                        ", HTML.TD(HTML.STRONG("20%")), "\n                                        ", HTML.TD("Jul 14, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("2"), "\n                                        ", HTML.TD("Alpha project"), "\n                                        ", HTML.TD("Alice Jackson"), "\n                                        ", HTML.TD("$963,486"), "\n                                        ", HTML.TD("Nec Euismod In Company"), "\n                                        ", HTML.TD(HTML.STRONG("40%")), "\n                                        ", HTML.TD("Jul 16, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("3"), "\n                                        ", HTML.TD("Betha project"), "\n                                        ", HTML.TD("John Smith"), "\n                                        ", HTML.TD("$996,824"), "\n                                        ", HTML.TD("Erat Volutpat"), "\n                                        ", HTML.TD(HTML.STRONG("75%")), "\n                                        ", HTML.TD("Jul 18, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("4"), "\n                                        ", HTML.TD("Gamma project"), "\n                                        ", HTML.TD("Anna Jordan"), "\n                                        ", HTML.TD("$105,192"), "\n                                        ", HTML.TD("Tellus Ltd"), "\n                                        ", HTML.TD(HTML.STRONG("18%")), "\n                                        ", HTML.TD("Jul 22, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("2"), "\n                                        ", HTML.TD("Alpha project"), "\n                                        ", HTML.TD("Alice Jackson"), "\n                                        ", HTML.TD("$674,803"), "\n                                        ", HTML.TD("Nec Euismod In Company"), "\n                                        ", HTML.TD(HTML.STRONG("40%")), "\n                                        ", HTML.TD("Jul 16, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("1"), "\n                                        ", HTML.TD("Master project"), "\n                                        ", HTML.TD("Patrick Smith"), "\n                                        ", HTML.TD("$174,729"), "\n                                        ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                        ", HTML.TD(HTML.STRONG("20%")), "\n                                        ", HTML.TD("Jul 14, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("4"), "\n                                        ", HTML.TD("Gamma project"), "\n                                        ", HTML.TD("Anna Jordan"), "\n                                        ", HTML.TD("$823,198"), "\n                                        ", HTML.TD("Tellus Ltd"), "\n                                        ", HTML.TD(HTML.STRONG("18%")), "\n                                        ", HTML.TD("Jul 22, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("1"), "\n                                        ", HTML.TD("Project ", HTML.SMALL("This is example of project")), "\n                                        ", HTML.TD("Patrick Smith"), "\n                                        ", HTML.TD("$778,696"), "\n                                        ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                        ", HTML.TD(HTML.STRONG("20%")), "\n                                        ", HTML.TD("Jul 14, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("2"), "\n                                        ", HTML.TD("Alpha project"), "\n                                        ", HTML.TD("Alice Jackson"), "\n                                        ", HTML.TD("$861,063"), "\n                                        ", HTML.TD("Nec Euismod In Company"), "\n                                        ", HTML.TD(HTML.STRONG("40%")), "\n                                        ", HTML.TD("Jul 16, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("3"), "\n                                        ", HTML.TD("Betha project"), "\n                                        ", HTML.TD("John Smith"), "\n                                        ", HTML.TD("$109,125"), "\n                                        ", HTML.TD("Erat Volutpat"), "\n                                        ", HTML.TD(HTML.STRONG("75%")), "\n                                        ", HTML.TD("Jul 18, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("4"), "\n                                        ", HTML.TD("Gamma project"), "\n                                        ", HTML.TD("Anna Jordan"), "\n                                        ", HTML.TD("$600,978"), "\n                                        ", HTML.TD("Tellus Ltd"), "\n                                        ", HTML.TD(HTML.STRONG("18%")), "\n                                        ", HTML.TD("Jul 22, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("2"), "\n                                        ", HTML.TD("Alpha project"), "\n                                        ", HTML.TD("Alice Jackson"), "\n                                        ", HTML.TD("$150,161"), "\n                                        ", HTML.TD("Nec Euismod In Company"), "\n                                        ", HTML.TD(HTML.STRONG("40%")), "\n                                        ", HTML.TD("Jul 16, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("1"), "\n                                        ", HTML.TD("Project ", HTML.SMALL("This is example of project")), "\n                                        ", HTML.TD("Patrick Smith"), "\n                                        ", HTML.TD("$160,586"), "\n                                        ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                        ", HTML.TD(HTML.STRONG("20%")), "\n                                        ", HTML.TD("Jul 14, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    ", HTML.TR("\n                                        ", HTML.TD("4"), "\n                                        ", HTML.TD("Gamma project"), "\n                                        ", HTML.TD("Anna Jordan"), "\n                                        ", HTML.TD("$110,612"), "\n                                        ", HTML.TD("Tellus Ltd"), "\n                                        ", HTML.TD(HTML.STRONG("18%")), "\n                                        ", HTML.TD("Jul 22, 2015"), "\n                                        ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                    "), "\n                                    "), "\n                                "), "\n                            "), "\n\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n\n\n    ");
}));

}).call(this);