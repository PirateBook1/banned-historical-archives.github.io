import {
  ContentPart,
  ContentType,
  ParserOption,
  ParserResult,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '张春桥同志重要指示';
  const parts: ContentPart[] =[{
    text: title,
    type: ContentType.title,
  }];
  const res: ParserResult[] = [
    {
      title,
      parts: [
        ...parts,
        ...`
1967年3月16日下午化工联合指挥部传达
今天转达张春桥同志最近的指示和工司的指示

据说最近王洪文同志生病，潘国平同志去南京。张春桥同志的指示是由陈伯达传达的。张春桥同志作了如下的指示：

1.目前的大方向是革命组织的大联合和三结合夺权，在大联合的时候，对联合有利的事情要多讲多做，对大联合不利的要少讲少做。造反队要对广大革命群众做深入细致的工作。（目前大联合，三结合是广大革命群众的迫切需要，再不抓紧做就不行了）

在大联合中不能有吃掉或搞垮哪个组织的想法，这种想法是很危险的。我们造反派一定要按大方向办事，不准砸，不准抓人。

我们上海的工人革命造反派要提高警惕，现在问题是复杂的，在这种情况下，我们的脑子不清醒的话，我们这些人就会第二次被打成“反革命”。

最近陈丕显、曹荻秋这两个家伙很不服气，不认为自己已下台了，还要上台。他们打了伤报告要张春桥带给陈伯达同志。这份东西很不象话，肤浅地谈了一些缺点。这份东西已被压下来了。所以在大联合问题上造反派要顾全大局，不可意气用事。

2.工总司不会解散

最近发表了青岛的经验后，有不少人问，上工司会不会象青岛一样解散，弄得人心惶惶。是不是会解散呢？这主要看我们自己，看我们是否按大方向办事。如果按大方向办事了，不反不会解散，还会发展起来，否则，就会被群众抛弃。工总司是毛主席亲自树起的一面大旗。不会有人公开反对的，但我们要爱惜自己的声誉，要靠自己的努力。如果有老子第一思想肯定要犯错误的。

3.关于团结问题

团结大多数是我们取得最后胜利的关键。对别人能团结多久就团结多久。不要以老子党自居。团结一个月，半个月也是好的。

4.“三结合”一定要体现工人阶级的领导，而不是“工人”的领导。夺权后是“工人阶级”掌权，而不是“工人”掌权。从工人中培养一些干部这是需要一段时间的。如果我们“唯我独尊”，在革命委员会里一定要工人掌权，或以工人为主，这是错误的。

关于“三结合”，希望你们总结几个典型来。

5.关于赤卫队的问题。

对于赤卫队，我们不能太天真了，不要以为赤卫队组织垮了，就万事大吉了，赤卫队至今还未完全打倒，以至在各处还有三十万，他们转入地下活动。当时为什么没有把它打倒？由于我们思想上放松了，没有彻底肃清它的流毒，所以现在还有三十万赤卫队大肆活动。（此外，由于各厂组织不严密，赤卫队已钻入到我们造反队内部来了。）

我们放松了这个工作，还没有彻底搞臭赤卫队，这是我们的错误，这一仗今后继续要搞的。

另外，要特别警惕赤卫队混入我们组织，改组我们组织（有些单位老队委统一靠边了，新的上任了，当然有一些老的有严重缺点和错误的也应该靠边，但赤卫队现已有钻入我队委搞幕后策划搞垮我组织）这样他们准备来个大反扑，也必定会有一次大反扑的。因此，对一些赤卫队队员（尤其是受蒙蔽的）要做细致的思想工作，争取他们醒悟，孤立一小撮。（有些厂有人抓我们造反派的底牌，把我们前一时期抡黑材料，看黑材料——这要按当时形势来看，也不能算什么——抓住这个小辫子，捞稻草大做文章。对这个问题我们要独立思考。其实看了又怎么样呢？看了就算了。如果有人纠缠不休，请他去上海市革命委员会问，上海市革命委员会会回答的。）

6.整顿组织

组织要清洗，要通过开门整风解决，要充分发动革命群众提意见。

7.关于公革会的问题

公革会的问题要按解决人民内部矛盾处理，公革会是有缺点，有错误的。但我们不要去冲击，是否可以采用其他方法来解决呢？

8.要注意群众思想动态，要总结群众经验。
`
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      authors: ['张春桥'],
      dates: [
        {
          year: 1967,
          month: 3,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: '',
      page_start: parser_opt.page_limits[0][0],
      page_end: parser_opt.page_limits[0][1],
    },
  ];
  return res;
}