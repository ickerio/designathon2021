addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const requestURL = new URL(request.url);
    const path = requestURL.pathname;
  
    if (request.method === "GET") {
      const id = path.split('/')[1]
      if (!id) {
        return respond({error: 'No id provided'}, 400)
      }
      
      const value = await VACCINES.get(id)
      if (value === null) {
        return respond({error: 'id does not exist'}, 400);
      }
  
      return respond(value, 200, false);
    }
  
    if (request.method === "POST") {
      const data = await request.text()
      const id = uuid();
  
      await VACCINES.put(id, data)
      return respond({success: id});
    }
  
    return respond({error: "Unknown request"}, 400)
  }
  
  function respond(data, status = 200, stringify = true) {
    return new Response(stringify ? JSON.stringify(data) : data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
          "Access-Control-Max-Age": "86400",
          "content-type": "application/json"
        },
        status
    });
  }
  
  // Pulled from github.com/lukeed/uuid
  var IDX=256, HEX=[], BUFFER;
  while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);
  function uuid() {
      var i=0, num, out='';
  
      if (!BUFFER || ((IDX + 16) > 256)) {
          BUFFER = Array(i=256);
          while (i--) BUFFER[i] = 256 * Math.random() | 0;
          i = IDX = 0;
      }
  
      for (; i < 16; i++) {
          num = BUFFER[IDX + i];
          if (i==6) out += HEX[num & 15 | 64];
          else if (i==8) out += HEX[num & 63 | 128];
          else out += HEX[num];
  
          if (i & 1 && i > 1 && i < 11) out += '-';
      }
  
      IDX++;
      return out;
  }