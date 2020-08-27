**Notes**

```
(a)Asynchoronous code first of all is non blocking.As we execute and run the code it is temporarily removed from the callstack to the webAPI where it continues to execute in the
background.

The rest of the code as the asycnhronous is in the process of being executed does continue to execute.


Event listeners such as click are also passed to the web API(s) which keeps track on when a click has happened to execute the callback or function beneath it.


The challenge comes when we require to use data that comes from an asynchronous function.If that data example when i am fetching data from a server does take sometime.

Then the very next execution point that requires the data always returns undefined since the data has not yet comeback.

What i have looked at in this lesson is the three ways to work with promises(Asynchronous code).

(a)Callbacks.Comes in handy .The only disadvantage is when you nest many loops within themselves.


(b)Promises.A great solution in terms of writing your code cleaner and catching errors.Promise.all helps me execute more
asynchronous code almost at the sametime.

(c)Async await.It adds Syntatical sugar and is the easiest way to work with promises in javascript.Uses promises under the
hood but with wat simpler syntax to write it.


```

**Notes by**

```
Mbugua Caleb

```

**Tutor**

```
Dev Ed

```
