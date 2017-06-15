/* =======================================================
    Copyright 2014 - ePortfolium - Licensed under the
    Educational Community License, Version 2.0 (the "License"); you may
    not use this file except in compliance with the License. You may
    obtain a copy of the License at

    http://opensource.org/licenses/ECL-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an "AS IS"
    BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
    or implied. See the License for the specific language governing
    permissions and limitations under the License.
   ======================================================= */

function comparelist(lista, listb, fa, fb, fab)
{
  var process = true;
  while(process)    // Main comparison loop
  {
    if(lista[0] < listb[0]) // A doesn't exist in B
    {
      var val = lista.shift();
      fa("A doesn't exist: "+val);
    }
    else if(lista[0] > listb[0]) // B doesn't exist in A
    {
      var val =listb.shift();
      fb("B doesn't exist: "+val);
    }
    else	// A is in B
    {
      var val = lista.shift();
      listb.shift();
      fab("A is in B: "+val);
    }
    if( lista.length == 0 || listb.length == 0 )
      process = false;
  }
  // Finish remainder
  while( lista.length > 0 )
  {
    var val = lista.shift();
    fa("Clearing A: "+val);
  }
  while( listb.length > 0 )
  {
    var val = listb.shift();
    fb("Clearing B: "+val);
  }
};