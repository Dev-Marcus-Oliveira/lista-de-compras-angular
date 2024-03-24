import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() ItemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar Item';

  valorItem!: string;
  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['ItemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar Item';
      this.valorItem = this.ItemQueVaiSerEditado?.nome;
    }
  }

  editarItem() {
    this.listaService.editarItemLista(
      this.ItemQueVaiSerEditado,
      this.valorItem
    );
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

  adicionarItem() {
    if (this.valorItem.trim() !== '') {
      this.listaService.adicionarItemLista(this.valorItem);
    }
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }
}
