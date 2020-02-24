export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Tablero Yipi',
					root: true,
					alignment: 'left',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
				},	
				
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Tablero Yipi',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				
			
				
				
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
