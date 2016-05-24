(function () {
    var audio = new Audio({
        instanceId: {%= CurrentADC.InstanceId %},
        autosubmit: {%= CurrentADC.PropValue("autosubmit") %},
        javascriptSupport: {%= Browser.Support("javascript") %},
        controls: {%= On(CurrentADC.PropValue("controls") <> "true",0,1) %},
        autoplay: {%= On(CurrentADC.PropValue("autoplay") <> "true",0,1) %},
        mobile: {%= On((CurrentADC.PropValue("controls") = "false" and ((Browser.Mobile = true) or (Browser.UserAgent.IndexOf("iPad") >= 1) or (Browser.UserAgent.IndexOf("iPod") >= 1) or (Browser.UserAgent.IndexOf("iPhone") >= 1) or (Browser.UserAgent.IndexOf("Android") >= 1) or (Browser.UserAgent.IndexOf("IEMobile") >= 1) )) <> true,0,1) %}
    });
} ());