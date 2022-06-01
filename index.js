function updatemap()
{
 fetch("./data.json")
 .then(response => response.json())
 .then(rsp=>{
    console.log(rsp.data)



    //  EXTRActing data
    rsp.data.forEach(element => {
         latitude=element.latitude;
         longitude=element.longitude;   
         cases=element.infected;
         dead=element.dead;
         if(cases>255)
         {
             color="rgb(255,0,0)";
         }
         else
         {
             color=`rgb(${cases},0,0`
         }


         if(dead>1)
         {
             color="rgb(0,255,0)";
         }

         


        //  plotting data from the documentation of mapbox (under draggable marker section)


        new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
     });
 })

}
updatemap()