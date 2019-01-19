/**Core**/
import {Component} from '@angular/core';
/**Services**/
import {UIHelper} from '../../../services/uiHelper';
@Component({
  templateUrl: 'credits.html',
})
export class CreditsPage {

  credits: any = {
    "icon-muehle":{
      "TITLE":"Icon Mühle",
      "LINK":"https://www.flaticon.com/authors/photo3idea-studio",
      "DESCRIPTION":`<div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" target="_blank" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`
    },
    "icon-filter":{
      "TITLE":"Icon Filter",
      "LINK":"https://www.flaticon.com/authors/ddara",
      "DESCRIPTION":`<div>Icons made by <a href="https://www.flaticon.com/authors/ddara" target="_blank" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`
    },
    "icon-bean":{
      "TITLE":"Icon Bean",
      "LINK":"https://www.freepik.com/",
      "DESCRIPTION":`<div>Icons made by <a href="https://www.freepik.com/" target="_blank" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`
    }
  }

  constructor(private uiHelper:UIHelper) {
  }

  public openLink(event, _link: string) {
    event.cancelBubble = true;
    event.preventDefault();
    this.uiHelper.openExternalWebpage(_link);

  }
}
