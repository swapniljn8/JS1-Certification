let eventdiv = document.querySelector('#text');
    let messgedisplay = '';
    try{
        function errorfuntion() {
            alert('image source is not present');
        }
        let obj = {'name' : 'dilip', 'value' : 'jain'};
        console.log('log %s %d %o %s', 'swapnil',1.1,obj,'jain');//same arg is present in the all the console method.
        console.warn('warn');
        console.error('error');
        console.info('info');
        console.table(obj);
        messgedisplay = 'inside try block - ';
        eventdiv.innerHTML = messgedisplay;
        let errorvar = '{name}';
        JSON.parse(errorvar);
        /*console methods */
      
    }
    catch(err) {
        messgedisplay += ' inside catch block - ';
       // eventdiv.innerText = messgedisplay;
        eventdiv.innerHTML = messgedisplay + "<br/>" + err;
    }
    finally{
        messgedisplay += ' inside finally';
        eventdiv.innerHTML = messgedisplay;
    }
    