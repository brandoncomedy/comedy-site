/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var utility:{
	[x:string]:any; 
	truncate:(number:any, decimal:any) => number;
};
