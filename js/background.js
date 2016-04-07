// // Anonymous "self-invoking" function
// (function() {
//     // Load the script
//     var script = document.createElement('script');
//     script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
//     script.type = 'text/javascript';
//     document.getElementsByTagName('head')[0].appendChild(script);
//
//
//     // Poll for jQuery to come into existance
//     var checkReady = function(callback) {
//       console.log("mafaka");
//         if ( typeof $ !== 'undefined') {
//             callback(jQuery);
//         }
//         else {
//             window.setTimeout(function() { checkReady(callback); }, 100);
//         }
//     };
//
//     // Start polling...
//     checkReady(function($) {
//         // Use $ here...

        $(document).ready(function(){

          $.fn.outerHTML = function(s) {
              return s
                  ? this.before(s).remove()
                  : jQuery("<p>").append(this.eq(0).clone()).html();
          };

          console.log("huy");
          // $(":not(.content, .content *)").html("")
          // $("header, aside, footer, nav, section, #header, .header, #footer, .footer, .nav").hide()

        })
//
//     });
// })();

// // Legacy support for pre-event-pages.
// var oldChromeVersion = !chrome.runtime;
//
// function onInit() {
//   console.log('onInit');
//   localStorage.requestFailureCount = 0;  // used for exponential backoff
//   startRequest({scheduleRequest:true, showLoadingAnimation:true});
//   if (!oldChromeVersion) {
//     // TODO(mpcomplete): We should be able to remove this now, but leaving it
//     // for a little while just to be sure the refresh alarm is working nicely.
//     chrome.alarms.create('watchdog', {periodInMinutes:5});
//   }
// }
//
// function onAlarm(alarm) {
//   console.log('Got alarm', alarm);
//   // |alarm| can be undefined because onAlarm also gets called from
//   // window.setTimeout on old chrome versions.
//   if (alarm && alarm.name == 'watchdog') {
//     onWatchdog();
//   } else {
//     startRequest({scheduleRequest:true, showLoadingAnimation:false});
//   }
// }
//
// function onWatchdog() {
//   chrome.alarms.get('refresh', function(alarm) {
//     if (alarm) {
//       console.log('Refresh alarm exists. Yay.');
//     } else {
//       console.log('Refresh alarm doesn\'t exist!? ' +
//                   'Refreshing now and rescheduling.');
//       startRequest({scheduleRequest:true, showLoadingAnimation:false});
//     }
//   });
// }
//
// if (oldChromeVersion) {
//   updateIcon();
//   onInit();
// } else {
//   chrome.runtime.onInstalled.addListener(onInit);
//   chrome.alarms.onAlarm.addListener(onAlarm);
// }
//
// var filters = {
//   // TODO(aa): Cannot use urlPrefix because all the url fields lack the protocol
//   // part. See crbug.com/140238.
//   url: [{urlContains: getGmailUrl().replace(/^https?\:\/\//, '')}]
// };
//
// function onNavigate(details) {
//   if (details.url && isGmailUrl(details.url)) {
//     console.log('Recognized Gmail navigation to: ' + details.url + '.' +
//                 'Refreshing count...');
//     startRequest({scheduleRequest:false, showLoadingAnimation:false});
//   }
// }
// if (chrome.webNavigation && chrome.webNavigation.onDOMContentLoaded &&
//     chrome.webNavigation.onReferenceFragmentUpdated) {
//   chrome.webNavigation.onDOMContentLoaded.addListener(onNavigate, filters);
//   chrome.webNavigation.onReferenceFragmentUpdated.addListener(
//       onNavigate, filters);
// } else {
//   chrome.tabs.onUpdated.addListener(function(_, details) {
//     onNavigate(details);
//   });
// }
//
// chrome.browserAction.onClicked.addListener(goToInbox);
//
// if (chrome.runtime && chrome.runtime.onStartup) {
//   chrome.runtime.onStartup.addListener(function() {
//     console.log('Starting browser... updating icon.');
//     startRequest({scheduleRequest:false, showLoadingAnimation:false});
//     updateIcon();
//   });
// } else {
//   // This hack is needed because Chrome 22 does not persist browserAction icon
//   // state, and also doesn't expose onStartup. So the icon always starts out in
//   // wrong state. We don't actually use onStartup except as a clue that we're
//   // in a version of Chrome that has this problem.
//   chrome.windows.onCreated.addListener(function() {
//     console.log('Window created... updating icon.');
//     startRequest({scheduleRequest:false, showLoadingAnimation:false});
//     updateIcon();
//   });
// }
