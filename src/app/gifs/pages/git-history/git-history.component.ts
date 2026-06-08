import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-git-history.component',
  imports: [GifListComponent],
  templateUrl: './git-history.component.html',
})
export default class GitHistoryComponent {
  // query = inject(ActivatedRoute).params.subscribe((params) => {
  //   console.log({ params });
  // });
  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'])),
  );

  gifByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });
}
