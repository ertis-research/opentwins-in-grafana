import { fetchExtendedApiForDittoService } from "services/general/fetchExtendedApiService"
import { Context } from "utils/context/staticContext"

export const getChildrenOfTwinService = ( context: Context, twinId: string ) => {
  return fetchExtendedApiForDittoService(context, '/twins/' + twinId + '/children', {
  //return fetchDittoService(context, '/search/things?filter=and(not(eq(attributes/_isType,true)),eq(attributes/_parents,"' + twinId + '"))', {
    method: 'GET',
    headers: {
      "Authorization": 'Basic '+btoa('ditto:ditto'),
      "Accept": "application/json"
    }
  })
}
