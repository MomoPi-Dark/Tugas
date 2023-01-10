import { DataMember, DataProduk as DataProduk } from "../typings";

export class Chunk {
  create<T, O>(
    array: T[],
    obj: (chunk: T[], indexEachLength: number, indexAll: number) => O,
    chunkSize: number
  ): O[];
  /**
   * @param array Array is split
   * @param obj Result of array
   * @param chunkSize Desired size
   * @example
   * const obj = [{name: 'a', value: 'b'}, {name: 'a', value: 'b'}];
   * const set = new Map();
   * const create = chunk.create(obj, (obj, index) => map.set('a',obj), 1);
   * console.log(set.get('a'));
   * //  Map {
   *  //  "a": [{name: 'a', value: 'b'}],
   * //   "a": [{name: 'a', value: 'b'}]
   * //  }
   * console.log(create);
   * //  [Map, Map]
   *
   */
  create(
    array: any[],
    obj: (chunk: any[], indexEachLength: number, indexAll: number) => any,
    chunkSize: number
  ) {
    const push = [];

    let u = 0;

    for (let i = 0; i < array.length; i += chunkSize) {
      const chunks = array.slice(i, i + chunkSize);

      const oj = obj(chunks, u++, chunks.length);
      push.push(oj);
    }

    return push;
  }

  deleteArrayData<A, F>(
    array: A[],
    find: (value: A, index: number, array: A[]) => F,
    deleteCount?: number
  ): A[];
  deleteArrayData(
    array: Array<any>,
    find: (value: any, index: number, array: any[]) => any,
    deleteCount = 1
  ) {
    return array.splice(array.findIndex(find), deleteCount);
  }
}

export function GetImage(image: any) {
  const myLoader = ({ src }: { src: any }) => {
    return image;
  };

  return {
    loader: myLoader,
    image,
  };
}

export function MapToArray<T>(map: T): any[];
export function MapToArray(myMap: any) {
  const arr = Array.from<any>(myMap);
  return arr;
}

// formatMoney(10, 1) // 10.0
