// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
//models
import {User} from '../../../core/_base/crud/models/lora/user.model';
// Services
import {UserService} from '../../../core/_base/crud/servicesLora/user.service';
// Widgets model
import { LayoutConfigService, SparklineChartOptions } from '../../../core/_base/layout';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
	providers:[UserService]
})
export class DashboardComponent implements OnInit {
	chartOptions1: SparklineChartOptions;
	chartOptions2: SparklineChartOptions;
	chartOptions3: SparklineChartOptions;
	chartOptions4: SparklineChartOptions;
	widget4_1: Widget4Data;
	widget4_2: Widget4Data;
	widget4_3: Widget4Data;
	widget4_4: Widget4Data;


	constructor(
		private layoutConfigService: LayoutConfigService,
		private _userService:UserService,
	) {}
	ngOnInit(): void {
		//respuesta de los servicios

		// obtener todos los usuarios
		this._userService.getAllUsers().subscribe(data=>{
			if(data){
			var listUser=[];
			var listChoferes=[];
				var usuarios =data.users;
				usuarios.forEach(function(elemento){
					var tipoUsuario=elemento.tipo_usuario;
					if(tipoUsuario!=='chofer'){
						listUser.push({
							pic: '',
							username: `${elemento.nombre} ${elemento.apaterno} ${elemento.amaterno}`,
							desc: `${elemento.correo}`,
							url: 'https://keenthemes.com.my/metronic',
							buttonClass: 'btn-label-brand'
						});
					}else if(tipoUsuario=='chofer'){
						listChoferes.push({
							icon: 'flaticon-pie-chart-1 kt-font-info',
							title: `${elemento.nombre} ${elemento.apaterno} ${elemento.amaterno}`,
							url: 'https://yipitest.com',
							value: 'activo',
							valueColor: 'kt-font-info'
						});
					}
				});
				this.widget4_2 = listChoferes;
				this.widget4_3 = listUser;
			}
		});
		//this._userService.getAllVehiculos().subscribe(data=>{console.log(data)});
		this._userService.getAllServicios().subscribe(data=>{console.log(data)});
		this.chartOptions1 = {
			data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
			color: this.layoutConfigService.getConfig('colors.state.brand'),
			border: 3
		};
		this.chartOptions2 = {
			data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
			color: this.layoutConfigService.getConfig('colors.state.danger'),
			border: 3
		};
		this.chartOptions3 = {
			data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
			color: this.layoutConfigService.getConfig('colors.state.success'),
			border: 3
		};
		this.chartOptions4 = {
			data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
			color: this.layoutConfigService.getConfig('colors.state.primary'),
			border: 3
		};

		// @ts-ignore
	/*	this.widget4_1 = shuffle([
			{
				pic: './assets/media/files/doc.svg',
				title: 'Metronic Documentation',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/jpg.svg',
				title: 'Project Launch Evgent',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/pdf.svg',
				title: 'Full Developer Manual For 4.7',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/javascript.svg',
				title: 'Make JS Development',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/zip.svg',
				title: 'Download Ziped version OF 5.0',
				url: 'https://keenthemes.com.my/metronic',
			}, {
				pic: './assets/media/files/pdf.svg',
				title: 'Finance Report 2016/2017',
				url: 'https://keenthemes.com.my/metronic',
			},
		]);*/


	}
}
