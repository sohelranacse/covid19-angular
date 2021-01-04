import { Component, OnInit } from '@angular/core';


function hello() {
    alert('Hello!!!');
}

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// this.loadScript('assets/vendor/vectormap/jquery.vmap.min.js');
		// this.loadScript('assets/vendor/vectormap/jquery.vmap.world.js');
		// this.loadScript('assets/js/world/world.js');
	}
	public loadScript(url: string) {
	    const body = <HTMLDivElement> document.body;
	    const script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;
	    script.defer = true;
	    body.appendChild(script);
	}

}
