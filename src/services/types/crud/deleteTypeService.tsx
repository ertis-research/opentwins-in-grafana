import { fetchExtendedApiForDittoService } from "services/general/fetchExtendedApiService"
import { Context } from "utils/context/staticContext"
import { IDittoThingData } from "utils/interfaces/dittoThing"

export const deleteTypeService = ( context: Context, typeId: string, type: IDittoThingData ) => {
    return fetchExtendedApiForDittoService(context, "/types/" + typeId, {
        method: 'DELETE',
        headers: {
            "Authorization": 'Basic '+btoa('ditto:ditto'),
            "Accept": "application/json"
        },
        body: JSON.stringify(type)
    })
}
