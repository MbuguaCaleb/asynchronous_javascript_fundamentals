**Notes**

```
(a)Asynchoronous code first of all is non blocking.As we execute and run the code it is temporarily removed from the callstack to the webAPI where it continues to execute in the
background.

The rest of the code as the asycnhronous is in the process of being executed does continue to execute.


Event listeners such as click are also passed to the web API(s) which keeps track on when a click has happened to execute the callback or function beneath it.


The challenge comes when we require to use data that comes from an asynchronous function.If that data example when i am fetching data from a server does take sometime.

Then the very next execution point that requires the data always returns undefined since the data has not yet comeback.

```

**Notes by**

```
Mbugua Caleb

```

**Tutor**

```
Dev Ed

```
