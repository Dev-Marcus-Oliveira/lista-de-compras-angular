import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnDestroy(): void {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  editarItem() {
    this.emitindoItemEditar.emit(this.item);
  }

  checarItem() {
    if (this.item.comprado == true) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }
}
