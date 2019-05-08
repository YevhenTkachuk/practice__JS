var q = "String";
        var w = 12;
        var f = 12.564;
        var b = false;
        var o = {name:"Name"};
        var y = [2,2,3];
        var u = new Date();
        var c = q/w;
        document.getElementById("field").innerHTML = `
                                                    <ul>
                                                        <li>String - ${q}</li>
                                                        <li>Integer - ${w}</li>
                                                        <li>Float - ${f}</li>
                                                        <li>Boolean - ${b}</li>
                                                        <li>Object - ${o}</li>
                                                        <li>Array - ${y}</li>
                                                        <li>DateTime - ${u}</li>
                                                        <li> c - ${c}</li>
                                                    </ul>
                                                    `