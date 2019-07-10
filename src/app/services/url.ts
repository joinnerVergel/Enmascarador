
let profile = "prod";
export const urlRedirect = profile == "dev" ? 'http://localhost:55256/ERVCC.svc':'https://nlbevolution/WCF_RONAN/ERVCC.svc';

export const urlMiddleLayer = profile == "dev" ? 'http://localhost:51770/api/Values':'https://e2e.movistar.com.co/MiddleLayerCasasDeCobro/api/Values';