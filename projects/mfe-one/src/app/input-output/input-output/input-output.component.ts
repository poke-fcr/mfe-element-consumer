import { AfterViewInit, Component } from '@angular/core';
import { environment } from 'projects/mfe-one/src/environments/environment';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'mfe-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})

export class InputOutputComponent implements AfterViewInit {

  //load styles and js dynamically
  //assets needs to be present in asset folder
  ngAfterViewInit() {
    this.loadStyles(environment.mfeUrl + '/assets/styles.css').subscribe((_data) => {})
    
    this.loadJs(environment.mfeUrl + '/assets/inputOutput.js').subscribe((_data) => {
      let id = document.getElementById('placeholderId')
      let node = document.createElement('input-output')
      node.setAttribute('message', 'Hi this is message from parent to element')
      node.addEventListener('time', (d: any)=>{
        console.log(d)
        this.showTime(d.detail.data)
      })
      // node.se
      id?.appendChild(node)
    })

  }

  public loadJs(script: string): Observable<string> {
    return new Observable<string>((observer: Observer<string>) => {
      // Load the script
      let scriptElement = document.createElement("script");
      scriptElement.type = "text/javascript";
      scriptElement.src = script;
      scriptElement.onload = () => {
        observer.next(script);
        observer.complete();
      };

      scriptElement.onerror = (error: any) => {
        observer.error("Couldn't load script " + script);
      };
      document.getElementsByTagName('body')[0].appendChild(scriptElement);
    });
  }

  public loadStyles(script: string): Observable<string> {
    return new Observable<string>((observer: Observer<string>) => {
      // Load the script
      let scriptElement = document.createElement("link");
      scriptElement.type = "text/styles";
      scriptElement.href = script;
      scriptElement.onload = () => {
        observer.next(script);
        observer.complete();
      };

      scriptElement.onerror = (error: any) => {
        observer.error("Couldn't load script " + script);
      };
      document.getElementsByTagName('head')[0].appendChild(scriptElement);
    });
  }

  showTime(e: string){
    alert('time from input output element - ' + e)
  }
}
