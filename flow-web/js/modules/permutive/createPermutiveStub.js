/**
 * @see {@link https://developer.permutive.com/page/the-permutive-javascript-sdk#installation}
 * @todo "this function is only for the stub function provided by permutive, need to create init function for all other content"
 **/

export function createPermutiveStub() {
  const { apiKey, workspaceId } = window.JSGlobals.permutive;

  /* eslint-disable */
  !function(e,o,n,i){if(!e){e=e||{},window.permutive=e,e.q=[];var t=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})};e.config=i||{},e.config.apiKey=o,e.config.workspaceId=n,e.config.environment=e.config.environment||"production",(window.crypto||window.msCrypto)&&(e.config.viewId=t());for(var g=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;r<g.length;r++){var w=g[r];e[w]=function(o){return function(){var n=Array.prototype.slice.call(arguments,0);e.q.push({functionName:o,arguments:n})}}(w)}}}(window.permutive,apiKey,workspaceId,{"consentRequired": true});
  /* eslint-enable */
}
