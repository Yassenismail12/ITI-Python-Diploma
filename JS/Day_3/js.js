        var linkTimeoutId;
        var timeIntervalId;
        var newWindow;

        // BOM Problems

        function problem1() {
            newWindow = window.open('index.html', 'testWindow', 'width=400,height=300');
            
            setTimeout(function() {
                    newWindow.close();
                    console.log('Window closed after 3 seconds');
            }, 3000);
        }


        function problem2() {
            alert('User Agent: ' + navigator.userAgent);
        }

        function problem3() {
            var status
            if (navigator.onLine){
              status = 'online'
            }else{
              status = 'offline'
            }
            console.log('Browser is: ' + status);
         }

        function problem4() {
            setTimeout(function() {
                location.reload();
            }, 5000);
        }

        function problem5() {
            console.log('URL: ' + location.href);
            console.log('Protocol: ' + location.protocol);
            console.log('Hostname: ' + location.hostname);
        }

        function problem6() {
            console.log('History navigation code (not executed):');
            console.log('history.back(); // Go back one page');
            console.log('history.forward(); // Go forward one page');
            
            // Actual code that would be used:
            // history.back();
            // history.forward();
        }

        function problem7() {
            var screenDiv = document.getElementById('screen-info');
            var width = screen.width;
            var height = screen.height;
            screenDiv.innerHTML = 'Screen Width: ' + width + 'px, Height: ' + height + 'px';
        }

        function problem8start() {
            var link = document.getElementById('test-link');
            link.innerHTML = 'Timer started... (2 seconds)';
            
            linkTimeoutId = setTimeout(function() {
                link.innerHTML = 'Text changed after 2 seconds!';
            }, 2000);
        }

        function problem8cancel() {
            if (linkTimeoutId) {
                clearTimeout(linkTimeoutId);
                var link = document.getElementById('test-link');
                link.innerHTML = 'Timer cancelled!';
            }
        }

        function problem9start() {
            problem9stop(); 
            
            timeIntervalId = setInterval(
              function() {
                var now = new Date();
                var timeString = now.getHours() + ':' + 
                               (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ':' + 
                               (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
                document.title = 'Time: ' + timeString;
            }, 1000
          );
        }

        function problem9stop() {
            if (timeIntervalId) {
                clearInterval(timeIntervalId);
                document.title = 'JS Day 3';
            }
        }

        function problem10() {
            var result = confirm('Do you want to continue?');
            if (result) {
                console.log('user said yes');
            } else {
                console.log('user said no');
            }
        }

        // DOM Traversal Problems

        function problem11() {
            var ul1 = document.getElementsByTagName('ul')[0];
            console.log('Problem 11');
            console.log('childNodes.length: ' + ul1.childNodes.length);
            console.log('children.length: ' + ul1.children.length);
            console.log('Difference: childNodes includes text and comment nodes, children includes only elements');
        }

        function problem12() {
            console.log('Problem 12');
            var bodyChildren = document.body.children;
            for (var i = 0; i < bodyChildren.length; i++) {
                console.log('Child ' + i + ': ' + bodyChildren[i].tagName);
            }
        }

        function problem13() {
            console.log('Problem 13');
            var container = document.getElementById('test-list');
            var childNodes = container.childNodes;
            for (var i = 0; i < childNodes.length; i++) {
                var node = childNodes[i];
                // Got from MDN and gemini 
                if (node.nodeType === 1) {
                    console.log('Element: ' + node.tagName + ' - ' + node.textContent);
                }
            }
        }

        function problem14() {
            console.log('Problem 14: firstChild vs firstElementChild');
            var container = document.getElementById('test-list');
            
            var firstChild = container.firstChild;
            var firstElementChild = container.firstElementChild;
            
            console.log('firstChild nodeType: ' + (firstChild ? firstChild.nodeType : 'null'));
            console.log('firstElementChild tagName: ' + (firstElementChild ? firstElementChild.tagName : 'null'));
            
            // firstChild can be any node type (text, comment, element)
            // firstElementChild is specifically the first element node
        }

        function problem15() {
            console.log('Problem 15');
            var ul = document.getElementById('test-list');
            var children = ul.children; 
            for (var i = 0; i < children.length; i++) {
                if (children[i].tagName === 'LI') {
                    console.log('LI ' + i + ': ' + children[i].textContent);
                }
            }
        }

        function problem17() {
            console.log('Problem 17');
            var targetElement = document.getElementById('test-list').firstElementChild; // First LI
            
            var parent = targetElement.parentNode;
            var siblings = parent.children;
            
            console.log('Siblings of first LI:');
            for (var i = 0; i < siblings.length; i++) {
                if (siblings[i] !== targetElement) {
                    console.log('Sibling: ' + siblings[i].tagName + ' - ' + (siblings[i].textContent || siblings[i].id || 'no content'));
                }
            }
        }

        function problem18() {
            console.log('Problem 18');
            
        }

        function problem19() {
            console.log('Problem 19');
            var container = document.body;
            var childNodes = container.childNodes;
            var elementCount = 0;
            
            for (var i = 0; i < childNodes.length; i++) {
                if (childNodes[i].nodeType === 1) { 
                    elementCount++;
                }
            }
            
            console.log('Body has ' + elementCount + ' element children ');
        }

        function problem20() {
            console.log('Problem 20');
            var form = document.forms[0]; 
            var elements = form.elements;
            
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                if (element.name) {
                    var value = element.value || '';
                    if (element.type === 'checkbox' || element.type === 'radio') {
                        value = element.checked ? 'checked' : 'unchecked';
                    }
                    console.log('Field "' + element.name + '": ' + value + ' (type: ' + element.type + ')');
                }
            }
        }

        function problem21() {
            console.log('Problem 21');
            var forms = document.forms;
            
            for (var i = 0; i < forms.length; i++) {
                var form = forms[i];
                var name = form.name || form.id || 'unnamed';
                console.log('Form ' + i + ': ' + name + ' (elements: ' + form.elements.length + ')');
            }
        }

        function problem22() {
            console.log('Problem 22');
            var images = document.images;
            for (var i = 0; i < images.length; i++) {
                var img = images[i];
                var src = img.src.substring(0, 50) + (img.src.length > 50 ? '...' : '');
                console.log('Image ' + i + ': width=' + img.width + ', src=' + src);
            }
        }

        function problem23() {
            console.log('Problem 23');
            var form = document.getElementById('test-form');
            var elements = form.elements;
            
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                if (element.type !== 'submit') {
                    element.disabled = !element.disabled; 
                    var status = element.disabled
                    if (status){
                      status = 'disabled'
                    }else {
                      status = 'enabled'
                    }
                    console.log('Field "' + element.name + '" ' + status);
                }
            }
        }

        function problem24() {
            console.log('Problem 24');
            
            var imagesArray = [];
            var images = document.images;
            for (var i = 0; i < images.length; i++) {
                imagesArray.push(images[i]);
            }
            var wideImages = [];
            for (var j = 0; j < imagesArray.length; j++) {
                var img = imagesArray[j];
                if (img.width > 100) {
                    wideImages.push(img);
                }
            }
            console.log('Found ' + wideImages.length + ' images with width > 100px:');
            for (var k = 0; k < wideImages.length; k++) {
                console.log('Image ' + k + ': ' + wideImages[k].width + 'px ');
            }
            
        }