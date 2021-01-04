import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {

  	constructor(
		private renderer: Renderer2
	) { }

	
  	renderExternalScript(src: string): HTMLScriptElement {
	  const script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = src;
	  script.async = true;
	  script.defer = true;
	  this.renderer.appendChild(document.body, script);
	  return script;
	}

	ngOnInit() {
		this.renderExternalScript('assets/vendor/vectormap/jquery.vmap.min.js'),
		this.renderExternalScript('assets/vendor/vectormap/maps/continents/jquery.vmap.asia.js'),
		this.renderExternalScript('assets/js/asia/asia.js').onload = () => {
			console.log('load 1');
		}

	}

}
