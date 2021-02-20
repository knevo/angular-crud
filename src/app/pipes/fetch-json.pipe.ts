import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'fetchJson',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: any = null
  private cachedUrl = ''
  private subscription: Subscription
  constructor(private http: HttpClient) { }

  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null
      this.cachedUrl = url
      this.subscription = this.http.get(url).subscribe(res => this.cachedData = res)
    }
    return this.cachedData ? JSON.stringify(this.cachedData) : 'Loading'
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
